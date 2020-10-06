import bugModel from "../Models/bugModel";

export function retrieveBugs() {
  let data = [];

  data.push(
    new bugModel({
      _id: 123983,
      name: "Crash on Load",
      details: "Crashes after 3 seconds",
      steps: "Open application and it will crash",
      version: "V2.0",
      priority: 1,
      assigned: "Lo",
      creator: "D Goings",
      time: "18:17",
    })
  );

  data.push(
    new bugModel({
      _id: 123773,
      name: "Won't Load",
      details: "home page svg won't load",
      steps: "Open application and homepage svg wont load",
      version: "V2.0",
      priority: 3,
      assigned: "Lo",
      creator: "D Goings",
      time: "18:35",
    })
  );

  let sorted = data.sort((a, b) => {
    return a.priority - b.priority;
  });
  return sorted;
}
