package com.kvk.main.service;

import java.util.ArrayList;
import java.util.List;
import java.util.StringJoiner;

import org.springframework.stereotype.Service;

import com.kvk.main.dto.BatchOutputClass;
import com.kvk.main.dto.BatchPostDTO;

@Service
public class MainService {

	public List<BatchOutputClass> getoutput(BatchPostDTO batchPostDTO){
		System.out.println(batchPostDTO);
		List<BatchOutputClass> batchOutputClasses=new ArrayList<>();
		BatchOutputClass batchOutputClass=new BatchOutputClass();
		for(String i:batchPostDTO.getKeywords()) {
			for(int j:batchPostDTO.getAliaslist()) {
				if(j==1)
					batchOutputClass.setUsecasename(interactivemode(i, j));
				else if(j==2)
					batchOutputClass.setPhysicaldatamodel30(interactivemode(i, j));
				else if(j==3)
					batchOutputClass.setPhysicaldatamodel256(interactivemode(i, j));
				else if(j==4)
					batchOutputClass.setCobolname(interactivemode(i, j));
				else if(j==5)
					batchOutputClass.setProductsystemname(interactivemode(i, j));
				else if(j==6)
					batchOutputClass.setProductshortname(interactivemode(i, j));
				else if(j==7)
					batchOutputClass.setObjectmodelname(interactivemode(i, j));
				else if(j==8)
					batchOutputClass.setObjectlanguage(interactivemode(i, j));
				else if(j==9)
					batchOutputClass.setXmldtdname(interactivemode(i, j));
				else if(j==10)
					batchOutputClass.setXmllongname(interactivemode(i, j));
				else if(j==11)
					batchOutputClass.setLogicalname(interactivemode(i, j));
				else if(j==12)
					batchOutputClass.setPascalname(interactivemode(i, j));
				else if(j==13)
					batchOutputClass.setPascalnameabbreviated(interactivemode(i, j));
				else
					batchOutputClass.setTitlecase(interactivemode(i, j));
			}
			batchOutputClass.setKeyword(i);
			batchOutputClasses.add(batchOutputClass);
			batchOutputClass=new BatchOutputClass();
		}
		
		return batchOutputClasses;
	}
	
	public String interactivemode(String keyword,int value) {
		String returnword="";
		switch (value) {
		case 1: {
			returnword=usecase(keyword);
			break;
		}
		case 2:{
			returnword=physialcase(keyword);
			break;
		}
		case 3:{
			returnword=physialcase(keyword);
			break;
		}
		case 4:{
			returnword=cobolname(keyword);
			break;
		}
		case 5:{
			returnword=productsystemname(keyword);
			break;
		}
		case 6:{
			returnword=productshortname(keyword);
			break;
		}
		case 7:{
			returnword=objectmodelname(keyword);
			break;
		}
		case 8:{
			returnword=objectlanguage(keyword);
			break;
		}
		case 9:{
			returnword=xmldtd(keyword);
			break;
		}
		case 10:{
			returnword=xmllong(keyword);
			break;
		}
		case 11:{
			returnword=logicalname(keyword);
			break;
		}
		case 12:{
			returnword=pascalcase(keyword);
			break;
		}
		case 13:{
			returnword=pascalcaseabbreviated(keyword);
			break;
		}
		case 14:{
			returnword=titlecase(keyword);
			break;
		}
		default:
			throw new IllegalArgumentException("Unexpected value: " + value);
		}
		return returnword;
	}
	public String cobolname(String keyword) {
		return keyword+"cobolname";
	}
	public String productsystemname(String keyword) {
		return keyword+"productsystemname";
	}
	public String productshortname(String keyword) {
		return keyword+"productshortname";
	}
	public String objectmodelname(String keyword) {
		return keyword+"objectmodelname";
	}
	public String objectlanguage(String keyword) {
		return keyword+"objectlanguage";
	}
	public String xmldtd(String keyword) {
		return keyword+"xmldtd";
	}
	public String xmllong(String keyword) {
		return keyword+"xmllong";
	}
	public String logicalname(String keyword) {
		return keyword+"logicalname";
	}
	public String titlecase(String keyword) {
		String[] words=keyword.split("\\s");
		String returnword="";
		for(String i:words) {
			returnword+=i.substring(0,1).toUpperCase()+i.substring(1).toLowerCase()+" ";
		}
		return returnword;
	}
	public String pascalcaseabbreviated(String keyword) {
		String[] words=keyword.split("\\s");
		String returnword="";
		for(String i:words) {
			returnword+=i.substring(0,1).toUpperCase()+i.substring(1).toLowerCase()+"_paab_";
		}
		return returnword;
	}
	public String pascalcase(String keyword) {
		String[] words=keyword.split("\\s");
		String returnword="";
		for(String i:words) {
			returnword+=i.substring(0,1).toUpperCase()+i.substring(1).toLowerCase()+"_paab_";
		}
		return returnword;
	}
	public String physialcase(String keyword) {
		String[] words=keyword.split("\\s");
		String returnword;
        StringJoiner s = new StringJoiner("_phy_");   //StringeJoiner object  
		
        for(String i:words) {
			i=i.substring(0,1).toUpperCase()+i.substring(1).toLowerCase();
			s.add(i);
		}
		
		return s.toString();
	}
	public String usecase(String keyword) {
		String[] words=keyword.split("\\s");
        StringJoiner s = new StringJoiner("_");   //StringeJoiner object  
        for(String i:words) {
        	s.add(i.toUpperCase());
        }
        return s.toString();
	}
}
