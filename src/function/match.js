export default function match(user, cpu) {
  return user.every(
    (position, i) => position[0] === cpu[i][0] && position[1] === cpu[i][1]
  );
}
