export const AllUser =
async (
  search = "",
  species = ""
) => {

  const res =
    await fetch(

`http://localhost:8000/pets?search=${search}&species=${species}`

    );

  const data =
    await res.json();

  return data;
};

export const OneUserId = async (id) => {
  const res = await fetch(`http://localhost:8000/pets/${id}`);

  const data = await res.json()
  return data;
};

export const catAdd = async (data) => {
  const res = await fetch("http://localhost:8000/pets-add", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const dataPet = await res.json();

  return dataPet;
};

export const PetAddUser = async (id) => {
  const res = await fetch(`http://localhost:8000/pet/${id}`);
  const data = await res.json(res);

  return data;
};

export const HandelDelete = async (id) => {
  const res = await fetch(`http://localhost:8000/delete-pat/${id}`, {
    method: "DELETE",
  });

  const data = await res.json();

  return data;
};

export const HandelUpdate = async (id, data) => {
  const res = await fetch(`http://localhost:8000/update-pet/${id}`, {
    method: "PUT",

    headers: {
      "content-type": "application/json",
    },

    body: JSON.stringify(data),
  });

  const dataUpdate = await res.json();

  return dataUpdate;
};

export const RequestPetData = async (data) => {
  const res = await fetch("http://localhost:8000/request-pet", {
    method: "POST",
    headers: { "content-type": "application/json" },

    body: JSON.stringify(data),
  });

  const Request = await res.json();
  return Request;
};

export const RequestData = async (id) => {
  const res = await fetch(`http://localhost:8000/request-pet/${id}`)

  const data= await res.json()

  return data

  
};


 export const UpdateStatus= async (id, status)=>{

  const res= await fetch( `http://localhost:8000/request-status/${id}`,{


    method:"PUT",

    headers:{"content-type":"application/json"},


    body:JSON.stringify({status})
  })

  const result= await res.json()

  return result

}



export const MyRequestData =
async (id) => {

  const res =
    await fetch(

      `http://localhost:8000/my-request/${id}`

    );

  const data =
    await res.json();

  return data;
};

// export const PetRequestData =
// async (id) => {

//   const res =
//     await fetch(

//       `http://localhost:8000/request-pet/${id}`

//     );

//   const data =
//     await res.json();

//   return data;
// };