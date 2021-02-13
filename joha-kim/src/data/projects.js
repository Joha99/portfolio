export const projects = [
  {
    title: "Portfolio",
    desc: [
      "React web application that contains a collection of my skills, projects, experiences, and interests",
      "Designed and created the user interface using Material-UI, JSX, CSS",
      "Interacts with MailChimp API to register anyone interested in updates about my experiences",
    ],
    tech: ["React.js", "HTML", "JSX", "CSS", "JavaScript"],
  },
  {
    title: "Anonymous Blog",
    desc: [
      "MEAN stack web application that allows registered users to post and edit blogs",
      "Designed and created the user interface using Angular Material UI, HTML, CSS, Sass",
      "Stored user information and blogs on MongoDB",
      "Handled client side requests for CRUD operations using Node.js server",
    ],
    tech: ["Angular", "Node.js", "MongoDB", "HTML", "CSS", "Sass"],
  },
  {
    title: "Gait Phase Prediction",
    desc: [
      "Machine learning model that predicts gait phase of walking given recorded sensor data",
      "Performed feature extraction over raw data files containing accelerometer, gyroscope, and thigh angle sensor data recorded over time",
      "Trained machine learning models to predict percent in gait phase of walking and optimized hyper-parameters using cross validation",
    ],
    tech: ["Python", "Keras", "Numpy"],
  },
  {
    title: "Cat or Not",
    desc: [
      "Image recognition algorithm that recognizes cats in images with 80% accuracy",
      "Preprocessed image datasets into single column numpy arrays representing flattened images",
      "Implemented vectorization for forward and backward propagation for learning of parameters",
      "Optimized loss iteratively to learn parameters of logistic regression by computing cost and gradient and then updated parameters using gradient descent",
    ],
    tech: ["Python", "Numpy"],
  },
];
