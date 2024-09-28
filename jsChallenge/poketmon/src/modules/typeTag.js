export const setPokemonType = (types) => {
    let temp = '';
    types.forEach((elm) => {
        switch (elm) {
            case 'grass':
                temp += `<div class="type-tag" id="${elm}" style="background-color: var(--${elm})">풀</div>`;
                break;
            case 'poision':
                temp += `<div class="type-tag" id="${elm}" style="background-color: var(--${elm})">독</div>`;
                break;
            case 'fire':
                temp += `<div class="type-tag" id="${elm}" style="background-color: var(--${elm})">불</div>`;
                break;
            case 'flying':
                temp += `<div class="type-tag" id="${elm}"  style="background-color: var(--${elm})">비행</div>`;
                break;
            case 'electric':
                temp += `<div class="type-tag" id="${elm}"  style="background-color: var(--${elm})">전기</div>`;
                break;
            case 'dragon':
                temp += `<div class="type-tag" id="${elm}"  style="background-color: var(--${elm})">드래곤</div>`;
                break;
            case 'ice':
                temp += `<div class="type-tag" id="${elm}" style="background-color: var(--${elm})">얼음</div>`;
                break;
            case 'rock':
                temp += `<div class="type-tag" id="${elm}"  style="background-color: var(--${elm})">바위</div>`;
                break;
            case 'water':
                temp += `<div class="type-tag" id="${elm}"  style="background-color: var(--${elm})">물</div>`;
                break;
            case 'psychic':
                temp += `<div class="type-tag" id="${elm}"  style="background-color: var(--${elm})">에스퍼</div>`;
                break;
            case 'normal':
                temp += `<div class="type-tag" id="${elm}"  style="background-color: var(--${elm})">노말</div>`;
                break;
            case 'bug':
                temp += `<div class="type-tag" id="${elm}"  style="background-color: var(--${elm})">벌레</div>`;
                break;
            case 'fairy':
                temp += `<div class="type-tag" id="${elm}" style="background-color: var(--${elm})">페어리</div>`;
                break;
            case 'poison':
                temp += `<div class="type-tag" id="${elm}" style="background-color: var(--${elm})">독</div>`;
                break;
            case 'ground':
                temp += `<div class="type-tag" id="${elm}"  style="background-color: var(--${elm})">땅</div>`;
                break;
            case 'fighting':
                temp += `<div class="type-tag" id="${elm}"  style="background-color: var(--${elm})">격투</div>`;
                break;
            case 'ghost':
                temp += `<div class="type-tag" id="${elm}" style="background-color: var(--${elm})">고스트</div>`;
                break;
            case 'steel':
                temp += `<div class="type-tag" id="${elm}"  style="background-color: var(--${elm})">강철</div>`;
                break;
            default:
                temp += `<div class="type-tag" id="${elm}"  style="background-color:black">${elm}</div>`;
                break;
        }
    });
    return temp;
};
