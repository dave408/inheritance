/*Java inheritance*/

public class car{

	public string gear;

	public void setGear();
	pbulic void Start();
}

public class audi extends car{
	public bool heatedSeat;

	public void hasHeatedSeat(bool val){
		heatedSeat = val;
	}
}

public class ford extends car{
	public bool GPS;

	public void hasGPS(bool val){
		hasGPS = val;
	}
}