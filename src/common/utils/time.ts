export function tempoParSegundos(tempo: string) {
    const [horas =' 0', minutos=' 0', segundos=' 0'] = tempo.split(':')

    const horasEmSegundos = Number(horas) * 3600;
    const minutosEmMinutos = Number(minutos) * 60;
    return horasEmSegundos + minutosEmMinutos + Number(segundos)
}