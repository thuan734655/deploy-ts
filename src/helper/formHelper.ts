export const getAuthorFromLocalStorage = (): string | null => {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData).name : null;
  };
  
  export const buildFormData = (form: HTMLFormElement): FormData => {
    const formData = new FormData(form);
    const newFormData = new FormData();
  
    [
      'description',
      'rating',
      'type',
      'status',
      'release_date',
      'last_air_date',
      'first_air_date',
      'number_of_episodes',
      'number_of_seasons',
      'episode_run_time',
      'genres',
      'movie_name',
      'background',
      'avatar',
    ].forEach((key) => {
      const value = formData.get(key) as string;
      if (value) {
        newFormData.append(key, value);
      }
    });
  
    const author = getAuthorFromLocalStorage();
    if (author) {
      newFormData.append('author', author);
    }
  
    return newFormData;
  };
  