export const postOrderData = async data => {
  const reqBody = [
    {
      itemId: data[0].itemId,
      itemCount: data[0].itemCount,
    },
  ];

  const res = await axiosInstance.post(
    `${API_AUTHORITY.USER}${API_ENDPOINT.ORDER.LOOK_UP}`,
    reqBody,
    {
      headers: {
        Authorization: `Bearer ${DUMMY_TOKEN}`,
      },
    }
  );

  return res;
};
