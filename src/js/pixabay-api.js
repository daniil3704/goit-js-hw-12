import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export async function getImages() {
  const loader = document.getElementById('loader');
  const query = document.getElementById('query').value;
  const API_KEY = '46026395-1be15dd18f45ebfa0c70a3bdf';
  const params = {
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  const urlParams = new URLSearchParams(params);
  const url =
    'https://pixabay.com/api/?key=' + API_KEY + '&q=' + query + '&' + urlParams;

  loader.style.display = 'block';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    if (data.totalHits === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }
    loader.style.display = 'none';
    return data;
  } catch (error) {
    console.error('Error message:', error);
    loader.style.display = 'none';
  }
}
