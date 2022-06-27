package Metodos;

public class Exe1 {
	public static void main(String[] args) {
		System.out.println("NUMEROS BASE: 4, 6");
		System.out.println("SOMA : " + soma(4,6));
		System.out.println("SUBTRACAO : " + subtracao(4,6));
		System.out.println("MULTIPLICACO : " + mult(4,6));
		System.out.println("DIVISAO : " + divisao(4,6));
		System.out.println("EMPRESTIMO BASE: 800");
		System.out.println("EMPRESTIMO APOS DESCONTO DE INSS: " + emprestimo(800));
	}
	
	public static int soma(int n1, int n2) {
		return n1 + n2;
	}
	public static int subtracao(int n1, int n2) {
		return n1 - n2;
	}
	public static int mult(int n1, int n2) {
		return n1 * n2;
	}
	public static int divisao(int n1, int n2) {
		if(n1 == 0 || n2 == 0) {
			return 0;
		}else {
			return n1 / n2;
		}
	}
	
	public static double emprestimo(int value) {
		int inss = 350;
		return value - inss;
	}
}
