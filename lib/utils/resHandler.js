export const resHandler = (res, statuses, statusCode, msg, data) => {
  console.log(res, statuses, statusCode, msg, data);
  res.status(statusCode).json({
    status: statuses,
    statusCode,
    msg,
    data,
  });
};
