import axios from 'axios';

export async function deleteQuote(id: string) {
  let status: string = '200';
  let data;
  let errorMessage: string | null = null;
  try {
    await axios({
      method: 'DELETE',
      url: `https://1ruz0p0nia.execute-api.us-east-1.amazonaws.com/quote?id=${id}`,
    }).then(response => {
      status = '200';
      data = response;
    });
  } catch (err: any) {
    status = '500';
    errorMessage = err.message;
  } finally {
    return {
      status,
      data,
      errorMessage,
    };
  }
}
