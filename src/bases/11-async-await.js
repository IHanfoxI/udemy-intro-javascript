// const getImagen = async () => {
//   const apiKey = 'ceijWGy1PJT1KURY4cI7w5OuY9I0PYb3';
//   const resp = await fetch(
//     `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
//   )
//     .then((resp) => resp.json())
//     .then(({ data }) => {
//       const { url } = data.images.original;
//       const img = document.createElement('img');
//       img.src = url;
//       document.body.append(img);
//     });
// };

const getImagen = async () => {
  try {
    const apiKey = 'ceijWGy1PJT1KURY4cI7w5OuY9I0PYb3';
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImagen();
