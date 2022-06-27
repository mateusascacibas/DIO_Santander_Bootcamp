package Condicionais;

public class Exe1 {
	public static void main(String[] args) {
		System.out.println(mes(1));
		System.out.println(ferias(7));
		semana("Sexta");
		inteira(3);
		
	}
	public static String mes(int num) {
		if(num == 1) {
			return "Janeiro";
		}else if(num == 2) {
			return "Fevereiro";
		} else if(num == 3) {
			return "Março";
		}else if(num == 4) {
			return "Abril";
		}else if(num == 5) {
			return "Maio";
		}else if(num == 6) {
			return "Junho";
		}else if(num == 7) {
			return "Julho";
		}else if(num == 8) {
			return "Agosto";
		}else if(num == 9) {
			return "Setembro";
		}else if(num == 10) {
			return "Outubro";
		}else if(num == 11) {
			return "Novembro";
		}else if(num == 12) {
			return "Dezembro";
		}else {
			return "Erro.";
		}
	}
	
	public static String ferias(int num) {
		if(num == 1 || num == 12 || num == 7) {
			return "Ferias";
		}else {
			return "";
		}
	}
	
	public static void semana(String sem) {
		switch (sem) {
		case "Segunda":
			System.out.println(2);
			break;
		case "Terca":
			System.out.println(3);
			break;
		case "Quarta":
			System.out.println(4);
			break;
		case "Quinta":
			System.out.println(5);
			break;
		case "Sexta":
			System.out.println(6);
			break;
		case "Sabado":
			System.out.println(7);
			break;
		case "Domingo":
			System.out.println(1);
			break;
		default:
			break;
		}
	}
	
	public static void inteira(int var) {
		switch (var) {
		case 1:
			System.out.println("Certo");
			break;

		case 2:
			System.out.println("Certo");
			break;

		case 3:
			System.out.println("Certo");
			break;
		case 4:
			System.out.println("Errado");
			break;
		case 5:
			System.out.println("Talvez");
			break;

		default:
			System.out.println("Valor indefinido.");
			break;
		}
	}
}
