function Meinfo(name, hobbies, pets, family, netflix) {
    this.name = name;
    this.hobbies = hobbies;
    this.pets = pets;
    this.familly = family;
    this.netflix = netflix;

    return[this.name, this.hobbies, this.pets, this.family, this.netflix]
}

const MeInformation = 
new Meinfo("My name is Wilma. ", "My hobbies are to skate and to be with my friends. ", "I have no petts, but i'v had 3 gineypiggs when I was younger. ", "I have an older sister, and a younger brother, and my parents are still happily married. ", "My favoriets on netflix, is horror movies or drama series, like House Wifes Of Beverley Hills, or Selling the CO, or Breaking Bad is realy good.")

export default MeInformation