import openai from './chatgpt'

export default async function query(
  prompt: string,
  chatId: string,
  model: string
) {
  const res = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[1].text)
    .catch(
      (err) =>
        `ChatGPT was unable to find the answer for that query! (Error: ${err.message})`
    )
  return res
}
