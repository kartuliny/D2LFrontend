export const getRarityName = (rarityNumber: number): string => {
    switch (rarityNumber) {
        case 0:
            return 'Común';
        case 1:
            return 'Poco común';
        case 2:
            return 'Raro';
        case 3:
            return 'Mítico';
        case 4:
            return 'Legendario';
        case 5:
            return 'Inmortal';
        case 6:
            return 'Arcano';
        default:
            return 'Desconocido';
    }
};

export const getRarityColor = (rarityNumber: number): string => {
    switch (rarityNumber) {
        case 0:
            return '#bfbfbf';
        case 1:
            return '#4d79ff';
        case 2:
            return '#ff4d4d';
        case 3:
            return '#ffcc00';
        case 4:
            return '#ff9900';
        case 5:
            return '#ff66ff';
        case 6:
            return '#8000ff';
        default:
            return '#000000';
    }
}

export const getRouletteTypeName = (rouletteType: number): string => {
    switch (rouletteType) {
        case 0:
            return 'Facil';
        case 1:
            return 'Dificil';
        case 2:
            return 'Extremadamente difícil';
        default:
            return 'Desconocido';
    }
}