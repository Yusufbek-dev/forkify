export const getJSON = async function(url) {
  try {
    let res = await fetch(url)
    const data = await res.json();

    if(!res.ok) throw new Error(`${data.massage} (${res.status})`);
    return data;
  }
  catch(err) {
    console.log(err);
  }
}