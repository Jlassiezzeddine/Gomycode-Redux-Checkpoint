export default function validateInfo(values) {
  let errors = {};

  if (!values.title.trim()) {
    errors.title = "Title is required";
  }

  if (!values.content.trim()) {
    errors.content = "Content is required";
  }

  if (!values.date) {
    errors.date = "Date is required";
  }

  return errors;
}
