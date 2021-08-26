export const deleteListItem = (filesName: String, list: File[]): File[] => {
  return list.filter(file => file.name !== filesName);
}