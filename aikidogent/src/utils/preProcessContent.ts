const imagePrefix = '/pls/apex/aikidogent/tinymce/file/';

export const preProcessContent = (input: string): string =>
  input.replace(
    imagePrefix,
    `${process.env.NEXT_PUBLIC_APEX_ROOT_URL}${imagePrefix}`,
  );
