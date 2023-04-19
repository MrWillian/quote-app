import axios from 'axios';

export async function getQuotesList(user_id: string) {
  let status: string | null = null;
  let data;
  let errorMessage: string | null = null;
  try {
    await axios
      .get(
        `https://1ruz0p0nia.execute-api.us-east-1.amazonaws.com/quotes?user_id=${user_id}`,
        {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        },
      )
      .then(response => {
        status = '200';
        data = response.data;
      });
  } catch (err: any) {
    status = '500';
    errorMessage = err.message;
    console.log('errorMessage', errorMessage);
  } finally {
    return {
      status,
      data,
      errorMessage,
    };
  }
}
