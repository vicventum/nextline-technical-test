import { COLORS } from '@/utils'

export function utilRandomColor() {
	// Obtener un índice aleatorio dentro del rango de la longitud del array COLORS
	const randomColor = Math.floor(Math.random() * COLORS.length)

	// Devolver el color correspondiente al índice aleatorio obtenido
	return COLORS[randomColor]
}
