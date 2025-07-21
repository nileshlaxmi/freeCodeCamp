window.onload = () => {
    getGameData()
    document.getElementById("creature-name").innerText = `Name: `;
    document.getElementById("creature-id").innerText = `Id: `;
    document.getElementById("weight").innerText = `Weight: `;
    document.getElementById("height").innerText = `Height: `;
    document.getElementById("types").innerText = `Types: `;
    document.getElementById("hp").innerText = `HP: `;
    document.getElementById("attack").innerText = `Attack: `;
    document.getElementById("defense").innerText = `Defense: `;
    document.getElementById("special-attack").innerText = `Special Attack: `;
    document.getElementById("special-defense").innerText = `Special Defense: `;
    document.getElementById("speed").innerText = `Speed: `;
};

let gameData = []

const getGameData = () => {
    fetch('https://rpg-creature-api.freecodecamp.rocks/api/creatures')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            gameData = [...gameData, ...data]
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// ✅ Return fetched data
const getCreatureData = async (idOrName) => {
    try {
        const response = await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${idOrName}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching creature data:', error);
        return null;
    }
}

// ✅ Make this async to await fetch result
const getCreature = async () => {
    const inputValue = document.getElementById("search-input")?.value?.trim();
    const match = gameData.find(
        (creature) =>
            creature.name.toLowerCase() === inputValue.toLowerCase() ||
            creature.id?.toString() === inputValue
    );

    if (!match) {
        alert(`Creature not found`);
        return;
    }

    const data = await getCreatureData(match.id);
    if (!data) {
        alert(`Error loading creature data`);
        return;
    }

    document.getElementById("creature-name").innerText = `Name: ${data?.name}`;
    document.getElementById("creature-id").innerText = `Id: ${data?.id}`;
    document.getElementById("weight").innerText = `Weight: ${data?.weight}`;
    document.getElementById("height").innerText = `Height: ${data?.height}`;

    const typesContainer = document.getElementById("types");
    typesContainer.innerText = "";
    if (data?.types?.length === 1) {
        typesContainer.innerText = `Types: ${data.types[0].name}`;
    } else if (data?.types?.length > 1) {
        typesContainer.innerText = `Types:\n`;
        data.types.forEach((typeObj, index) => {
            typesContainer.innerText += `${typeObj.name}\n`;
        });
    }

    data?.stats?.forEach(stat => {
        switch (stat?.name) {
            case 'hp':
                document.getElementById("hp").innerText = `HP: ${stat?.base_stat}`;
                break;
            case 'attack':
                document.getElementById("attack").innerText = `Attack: ${stat?.base_stat}`;
                break;
            case 'defense':
                document.getElementById("defense").innerText = `Defense: ${stat?.base_stat}`;
                break;
            case 'special-attack':
                document.getElementById("special-attack").innerText = `Special Attack: ${stat?.base_stat}`;
                break;
            case 'special-defense':
                document.getElementById("special-defense").innerText = `Special Defense: ${stat?.base_stat}`;
                break;
            case 'speed':
                document.getElementById("speed").innerText = `Speed: ${stat?.base_stat}`;
                break;
        }
    });
}

const clearFields = () => {
    document.getElementById("search-input").value = "";
    document.getElementById("creature-name").innerText = `Name: `;
    document.getElementById("creature-id").innerText = `Id: `;
    document.getElementById("weight").innerText = `Weight: `;
    document.getElementById("height").innerText = `Height: `;
    document.getElementById("types").innerText = `Types: `;
    document.getElementById("hp").innerText = `HP: `;
    document.getElementById("attack").innerText = `Attack: `;
    document.getElementById("defense").innerText = `Defense: `;
    document.getElementById("special-attack").innerText = `Special Attack: `;
    document.getElementById("special-defense").innerText = `Special Defense: `;
    document.getElementById("speed").innerText = `Speed: `;
}