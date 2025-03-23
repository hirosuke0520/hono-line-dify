export const getContentByMessageId = async (messageId: string): Promise<Blob> => {
  const res = await fetch(`https://api-data.line.me/v2/bot/message/${messageId}/content`, {
    headers: { Authorization: `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}` }
  })
  return await res.blob()
}
