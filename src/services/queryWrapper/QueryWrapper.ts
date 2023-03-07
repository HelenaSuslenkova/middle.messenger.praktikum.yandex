const METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

type OptionsType = {
  method: string;
  data: any;
  headers: Record<string, string>;
  timeout: number;
};

function queryStringify(data: any) {
  const queryParams = [];

  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      queryParams.push(`${key}=${data[key]}`);
    }
  }
  let result = queryParams.join("&");
  console.info(result);
  return result;
}

export default class QueryWrapper {
  get = (url: string, options: OptionsType) => {
    return this.request(url, { ...options, method: METHODS.GET });
  };

  post = (url: string, options: OptionsType) => {
    return this.request(url, { ...options, method: METHODS.POST });
  };

  put = (url: string, options: OptionsType) => {
    return this.request(url, { ...options, method: METHODS.PUT });
  };

  delete = (url: string, options: OptionsType) => {
    return this.request(url, { ...options, method: METHODS.DELETE });
  };

  request = (
    url: string,
    options: OptionsType
  ) => {
    const { method, data, headers, timeout } = options;

    let params = "";
    if (method === METHODS.GET && data) {
      params = queryStringify(data);
      url = `${url}?${params}`;
    }

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key]);
      });

      if (timeout) {
        xhr.timeout = timeout;
      }

      xhr.open(method, url);

      try {
        xhr.onload = () => resolve(xhr);

        xhr.onabort = () => reject;
        xhr.onerror = () => reject;
        xhr.ontimeout = () => reject;

        if (method === METHODS.GET || !data) {
          xhr.send();
        } else if (Object.keys(data).length) {
          xhr.send(data);
        }
      } catch (error) {
        console.log(error.status);
      }
    });
  };
}
