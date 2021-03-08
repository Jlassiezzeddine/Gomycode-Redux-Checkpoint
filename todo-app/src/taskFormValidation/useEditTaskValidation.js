import { useState, useEffect } from "react";

const useEditTaskValidation = (toEditTask, callback, validate) => {
  console.log(toEditTask);
  const [editValues, setEditValues] = useState({
    title: toEditTask.title,
    content: toEditTask.content,
    date: toEditTask.date,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditValues({
      ...editValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setErrors(validate(editValues));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [callback, errors, isSubmitting]);
  return { handleChange, editValues, handleSubmit, errors };
};

export default useEditTaskValidation;
