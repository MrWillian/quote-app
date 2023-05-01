import uuid from 'react-native-uuid';

const sanitizeQuoteDataToSave = (payload, sub: string) => ({
  id: payload.id ?? uuid.v4(),
  title: payload.title,
  description: payload.description,
  user_id: sub,
  date: new Date(payload.date).toLocaleString().split(',')[0],
  created_at: new Date(),
  updated_at: null,
});

export default sanitizeQuoteDataToSave;
