class Pokemon extends HTMLElement {
  constructor(data) {
    super();
    const { abilities, height, moves, sprites, id } = data;

    this.abilitiesList = [];
    for (const { ability } of abilities) {
      this.abilitiesList.push(ability.name);
    }
    this.movesList = [];
    for (const { move } of moves) {
      this.movesList.push(move.name);
    }
    this.height = height;
    this.pokedexNumber = id;

    const { front_default, back_default } = sprites;
    this.frontSprite = front_default;
    this.backSprite = back_default;
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("type", "text/css");
    linkElem.setAttribute("href", "./../dist/output.css");
    shadow.appendChild(linkElem);

    // Create nested elements
    const wrapper = document.createElement("div");
    wrapper.setAttribute(
      "class",
      "max-w-sm p-2 bg-slate-950 border-gray-700 shadow rounded-lg"
    );

    const imageWrapper = document.createElement("div");
    imageWrapper.setAttribute(
      "class",
      "w-full flex flex-col items-center justify-middle"
    );

    const imgLink = document.createElement("a");

    const imgTag = document.createElement("img");
    imgTag.setAttribute("class", "rounded-t-lg object-fill w-48 h-48");
    imgTag.setAttribute("src", this.frontSprite);
    imgTag.setAttribute("alt", "pokemon image");

    //connect img to the anchor element
    imgLink.appendChild(imgTag);
    //connet to wrapper
    imageWrapper.appendChild(imgLink);
    //Connect to div
    wrapper.appendChild(imageWrapper);

    const textWrapper = document.createElement("div");
    textWrapper.setAttribute(
      "class",
      "p-3 flex flex-col justify-middle items-center"
    );

    //Moves
    const [movesAnchor, movesList] = this.createMovesElement();
    // Abilities
    const [abilitiesAnchor, abilitiesList] = this.createAbilitiesElement();
    // Height
    const [heightTitle, heightText] = this.createHeightElement();
    // Pokedex Number
    const [pokedexAnchor, pokedexText] = this.createPokedexNumberElement();

    textWrapper.appendChild(movesAnchor);
    textWrapper.appendChild(movesList);
    textWrapper.appendChild(abilitiesAnchor);
    textWrapper.appendChild(abilitiesList);
    textWrapper.appendChild(heightTitle);
    textWrapper.appendChild(heightText);
    textWrapper.appendChild(pokedexAnchor);
    textWrapper.appendChild(pokedexText);

    wrapper.appendChild(textWrapper);

    // console.log(wrapper);
    this.shadowRoot?.append(wrapper);
  }

  createAbilitiesElement() {
    const abilitiesTitle = document.createElement("h5");
    abilitiesTitle.setAttribute(
      "class",
      "mb-2 text-2xl font-bold tracking-light text-blue-500"
    );
    abilitiesTitle.textContent = "Abilities List";

    const abilitiesAnchor = document.createElement("a");
    abilitiesAnchor.appendChild(abilitiesTitle);

    const abilities = document.createElement("p");
    abilities.setAttribute("class", "mb-3 font-normal text-gray-400");

    let abilitiesText = this.abilitiesList.reduce(
      (prev, ability) => `${prev}, ${ability}`
    );

    if (abilitiesText.length > 300) {
      abilitiesText = abilitiesText.slice(0, 300);
    }
    // abilities.textContent = this.abilitiesList.reduce(
    //   (prev, ability) => `${prev}, ${ability}`
    // );
    abilities.textContent = abilitiesText;

    return [abilitiesAnchor, abilities];
  }

  createMovesElement() {
    const movesTitle = document.createElement("h5");
    movesTitle.setAttribute(
      "class",
      "mb-2 text-2xl font-bold tracking-light text-blue-500"
    );
    movesTitle.textContent = "Moves List";

    const movesAnchor = document.createElement("a");
    movesAnchor.appendChild(movesTitle);

    const moves = document.createElement("p");
    moves.setAttribute("class", "mb-3 font-normal text-gray-400");
    let movesText = this.movesList.reduce((prev, move) => `${prev}, ${move}`);

    if (movesText.length > 300) {
      movesText = movesText.slice(0, 300);
    }
    // moves.textContent = this.movesList.reduce(
    //   (prev, move) => `${prev}, ${move}`
    // );
    moves.textContent = movesText;

    return [movesAnchor, moves];
  }

  createHeightElement() {
    const heightTitle = document.createElement("h5");
    heightTitle.setAttribute(
      "class",
      "mb-2 text-2xl font-bold tracking-light text-blue-500"
    );
    heightTitle.textContent = "Height";

    const heightAnchor = document.createElement("a");
    heightAnchor.appendChild(heightTitle);

    const heightValue = document.createElement("p");
    heightValue.setAttribute("class", "mb-3 font-normal text-gray-400");
    heightValue.textContent = this.height.toString();

    return [heightAnchor, heightValue];
  }

  createPokedexNumberElement() {
    const pokedexNumberTitle = document.createElement("h5");
    pokedexNumberTitle.setAttribute(
      "class",
      "mb-2 text-2xl font-bold tracking-light text-blue-500"
    );
    pokedexNumberTitle.textContent = "Pokedex Number";

    const pokedexAnchor = document.createElement("a");
    pokedexAnchor.appendChild(pokedexNumberTitle);

    const pokedexText = document.createElement("p");
    pokedexText.setAttribute("class", "mb-3 font-normal text-gray-400");
    pokedexText.textContent = this.pokedexNumber.toString();

    return [pokedexAnchor, pokedexText];
  }

  disconnectCallback() {
    console.log("Component removed from DOM");
  }

  attributeChangedCallback() {
    console.log("Attribute changed.");
  }
}

customElements.define("pokemon-tag", Pokemon);

// export default Pokemon;
