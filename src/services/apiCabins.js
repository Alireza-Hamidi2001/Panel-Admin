import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
    const { data: cabins, error } = await supabase
        .from('cabins')
        .select('*');
    if (error) {
        console.error(error);
        throw new Error('cabins could not be loaded');
    }

    return cabins;
}

export async function deleteCabin(id) {
    const { error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id);

    if (error) {
        console.error(error);
        throw new Error('cabins could not be deleted');
    }
}

// https://zvqqtsetchazwhzvhlnt.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

export async function createCabin(newCabin) {
    const fileExt = newCabin?.image?.name?.split('.').pop();
    const imageName = `${Math.random()
        .toString(36)
        .substring(2)}.${fileExt}`;

    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    // 1. Create cabin
    const { data, error } = await supabase
        .from('cabins')
        .insert([{ ...newCabin, image: imagePath }])
        .select();

    if (error) {
        console.error(error);
        throw new Error('cabins could not be created !');
    }

    // 2. Upload image
    const { error: storageError } = await supabase.storage
        .from('cabin-images') // bucket name in Supabase.
        .upload(imageName, newCabin.image);

    // 3. delete cabin if there was an error uploading image
    if (storageError) {
        await supabase.from('cabins').delete().eq('id', data[0].id);
        console.error(storageError);
        throw new Error(
            'cabin images could not be uploaded so row will be deleted'
        );
    }
    return data;
}


export async function duplicateCabin(newCabin) {
    const { data, error } = await supabase
        .from('cabins')
        .insert([newCabin])
        .select();

    if (error) {
        console.error(error);
        throw new Error('Cabin could not be duplicated!');
    }

    return data;
}
