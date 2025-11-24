import { faker } from "@faker-js/faker";

const generateRows = (numRows: number) => {
  return Array.from({ length: numRows }).map((_, index) => ({
    id: String(index + 1),
    username: faker.internet.username(),
    avatar: faker.image.avatar(),
    date: faker.date.recent().toISOString(),
    text: faker.lorem.sentences(),
    likes: faker.datatype,
  }));
};

export const mockUserReferrals = generateRows(8);

console.log(mockUserReferrals);
