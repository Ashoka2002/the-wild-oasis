import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  console.log(data, error);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be fetched");
  }

  return data;
}
