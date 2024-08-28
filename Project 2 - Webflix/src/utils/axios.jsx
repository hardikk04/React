import axios from "axios";

const instace = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzQ3MmM0ZTIyZmY2NzUwZWJkMWQwMzA2M2I3MjMxMiIsIm5iZiI6MTcyMzA3MjIwMy43NzAyNSwic3ViIjoiNjZiM2ZkNzBmNGI3MzYyZDM0NjIyOGJlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.t3PHuZmkvzAoz-fQ2-5kqk1Rpj8IJ0cBfla6rtWD4_U",
  },
});

export default instace;
