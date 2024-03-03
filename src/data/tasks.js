const tasks = [
  {
    id: crypto.randomUUID(),
    title: "Integration API",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    tags: ["web", "python", "api"],
    priority: "High",
    isFavorite: false,
  },
  {
    id: crypto.randomUUID(),
    title: "API Data Synchronization with Python",
    description:
      "Implement a Python solution to synchronize data between an API and a third-party database securely, optimizing data exchange. ",
    tags: ["python", "web", "data science"],
    priority: "Medium",
    isFavorite: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Efficient Web API Connectivity in Python",
    description:
      "Develop a Python-based solution for connecting an API to a third-party database securely, focusing on efficient data handling and exchange. ",
    tags: ["java", "node js", "laravel"],
    priority: "Low",
    isFavorite: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Data Handling",
    description:
      "Integrate a web API with a third-party database using secure methods, focusing on seamless data exchange and data integrity. ",
    tags: ["mongodb", "mysql", "sql lite"],
    priority: "Medium",
    isFavorite: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Seamless Data Exchange",
    description:
      "Focusing on seamless data exchange and data integrity. Integrate a web API with a third-party database using secure methods.",
    tags: ["web socket", "react hooks", "context api"],
    priority: "High",
    isFavorite: false,
  },
];

const getTaskList = () => {
  return tasks;
};

export { getTaskList };
