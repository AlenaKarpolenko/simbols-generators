import Character from '../Character';

test('should check the class Character no name < 2', () => {
  expect(() => new Character('a', 'Bowman')).toThrowError(new Error('Ошибка'));
});

test('should check the class Character no name', () => {
  expect(() => new Character('Игрок', 'Hero')).toThrowError(new Error('Ошибка'));
});

test('should check the class Character no name', () => {
  const character = new Character('Игрок', 'Magician');
  expect(character.name).toBe('Игрок');
});

test('should check the class Character no name', () => {
  const character = new Character('Игрок', 'Magician');
  expect(character.type).toBe('Magician');
});
test('should check the class Character no name', () => {
  const character = new Character('Игрок', 'Magician');
  const result = {
    name: 'Игрок',
    type: 'Magician',
    health: 100,
    level: 1,
  };
  expect(character).toMatchObject(result);
});


//////////////////

test('should levelUp the defence', () => {
  const character = new Character('Игрок', 'Magician');
  character.health = 0;
  expect(() => character.levelUp()).toThrowError(new Error('Нельзя повысить левел умершего'));
});

test('should levelUp the defence', () => {
  const character = new Character('Игрок', 'Magician');
  character.attack = 10;
  character.defence = 10;
  character.levelUp();
  expect(character.health).toBe(100);
  expect(character.attack).toBe(12);
  expect(character.defence).toBe(12);
  expect(character.level).toBe(2);
});

test('should points damage the health', () => {
  const character = new Character('Игрок', 'Magician');
  character.defence = 10;
  character.damage(50);
  expect(character.health).toBe(55);
});

test('should points damage the health', () => {
  const character = new Character('Игрок', 'Magician');
  character.defence = 10;
  character.damage(500);
  expect(character.health).toBe(0);
});