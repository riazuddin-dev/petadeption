const API = process.env.NEXT_PUBLIC_API_URL;

// ALL PETS
export const AllUser = async (
  search = "",
  species = ""
) => {
  try {
    const res = await fetch(
      `${API}/pets?search=${search}&species=${species}`,
      { cache: "no-store" }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
};

// SINGLE PET
export const OneUserId = async (id) => {
  try {
    const res = await fetch(`${API}/pets/${id}`, {
      headers: {
        authorization: "Bearer login",
      },
      cache: "no-store",
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
};

// ADD PET
export const catAdd =
async (data) => {

  const res =
  await fetch(

`${API}/pets-add`,

    {
      method: "POST",

      headers: {

        "content-type":
        "application/json",

        authorization:
        "Bearer login",
      },

      body:
      JSON.stringify(data),
    }
  );

  return await res.json();
};

// MY PETS
export const PetAddUser =
async (id) => {

  const res =
  await fetch(

`${API}/pet/${id}`,

    {
      headers: {

        authorization:
        "Bearer login",
      },
    }
  );

  return await res.json();
};

// DELETE PET
export const HandelDelete =
async (id) => {

  const res =
  await fetch(

`${API}/delete-pat/${id}`,

    {
      method: "DELETE",

      headers: {

        authorization:
        "Bearer login",
      },
    }
  );

  return await res.json();
};

// UPDATE PET
export const HandelUpdate =
async (id, data) => {

  const res =
  await fetch(

`${API}/update-pet/${id}`,

    {
      method: "PUT",

      headers: {

        "content-type":
        "application/json",

        authorization:
        "Bearer login",
      },

      body:
      JSON.stringify(data),
    }
  );

  return await res.json();
};

// REQUEST PET
export const RequestPetData =
async (data) => {

  const res =
  await fetch(

`${API}/request-pet`,

    {
      method: "POST",

      headers: {

        "content-type":
        "application/json",

        authorization:
        "Bearer login",
      },

      body:
      JSON.stringify(data),
    }
  );

  return await res.json();
};

// GET REQUEST
export const RequestData =
async (id) => {

  const res =
  await fetch(

`${API}/request-pet/${id}`,

    {
      headers: {

        authorization:
        "Bearer login",
      },
    }
  );

  return await res.json();
};

// UPDATE REQUEST STATUS
export const UpdateStatus =
async (id, status) => {

  const res =
  await fetch(

`${API}/request-status/${id}`,

    {
      method: "PUT",

      headers: {

        "content-type":
        "application/json",

        authorization:
        "Bearer login",
      },

      body:
      JSON.stringify({
        status,
      }),
    }
  );

  return await res.json();
};

// MY REQUESTS
export const MyRequestData =
async (id) => {

  const res =
  await fetch(

`${API}/my-request/${id}`,

    {
      headers: {

        authorization:
        "Bearer login",
      },
    }
  );

  return await res.json();
};