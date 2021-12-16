import publicIp from "public-ip";

export const get_client_ip = () => {
  const promise = new Promise(async (resolve, reject) => {
    try {
      const response = await publicIp.v4({
        fallbackUrls: ["https://ifconfig.co/ip"],
      });
      resolve(response);
    } catch (e) {
      reject(e);
    }
  });
  promise.then((result) => result);
};
