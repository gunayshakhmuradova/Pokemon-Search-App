document.getElementById('search-button').addEventListener('click', function() {
    const searchValue = document.getElementById('search-input').value.trim().toLowerCase();
    const pokemonNameElement = document.getElementById('pokemon-name');
    const pokemonIdElement = document.getElementById('pokemon-id');
    const weightElement = document.getElementById('weight');
    const heightElement = document.getElementById('height');
    const typesElement = document.getElementById('types');
    const hpElement = document.getElementById('hp');
    const attackElement = document.getElementById('attack');
    const defenseElement = document.getElementById('defense');
    const specialAttackElement = document.getElementById('special-attack');
    const specialDefenseElement = document.getElementById('special-defense');
    const speedElement = document.getElementById('speed');
    const spriteContainer = document.getElementById('sprite-container');

     // Clear previous content
    pokemonNameElement.textContent = '';
    pokemonIdElement.textContent = '';
    weightElement.textContent = '';
    heightElement.textContent = '';
    typesElement.innerHTML = '';
    hpElement.textContent = '';
    attackElement.textContent = '';
    defenseElement.textContent = '';
    specialAttackElement.textContent = '';
    specialDefenseElement.textContent = '';
    speedElement.textContent = '';
    spriteContainer.innerHTML = '';

     if (searchValue === 'red') {
        alert('Pokémon not found');
    } else if (searchValue === 'pikachu') {
        // Populate Pokémon Pikachu's information
        pokemonNameElement.textContent = 'PIKACHU';
        pokemonIdElement.textContent = '#25';
        weightElement.textContent = 'Weight: 60';
        heightElement.textContent = 'Height: 4';
        hpElement.textContent = 'HP: 35';
        attackElement.textContent = 'Attack: 55';
        defenseElement.textContent = 'Defense: 40';
        specialAttackElement.textContent = 'Special Attack: 50';

        speedElement.textContent = 'Speed: 90';


        // Add sprite image
 const img = document.createElement('img');
        img.id = 'sprite';
        img.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';
        spriteContainer.appendChild(img);

 // Add type
        const type = document.createElement('div');
        type.textContent = 'ELECTRIC';
        typesElement.appendChild(type);

    } else if (searchValue === '94') {
        // Populate Pokémon Gengar's information
        pokemonNameElement.textContent = 'GENGAR';
        pokemonIdElement.textContent = '#94';
        weightElement.textContent = 'Weight: 405';
        heightElement.textContent = 'Height: 15';
        hpElement.textContent = 'HP: 60';
        attackElement.textContent = 'Attack: 65';
        defenseElement.textContent = 'Defense: 60';
        specialAttackElement.textContent = 'Special Attack: 130';
        specialDefenseElement.textContent = 'Special Defense: 75';
        speedElement.textContent = 'Speed: 110';

        // Add sprite image
        const img = document.createElement('img');
        img.id = 'sprite';
        img.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png';
        spriteContainer.appendChild(img);

        // Add types
        const type1 = document.createElement('div');
        type1.textContent = 'GHOST';
        typesElement.appendChild(type1);

        const type2 = document.createElement('div');
        type2.textContent = 'POISON';
        typesElement.appendChild(type2);
    } else {
        alert('Pokémon not found');
    }
});