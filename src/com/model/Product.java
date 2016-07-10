package com.model;

import java.io.Serializable;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="product") 

public class Product implements Serializable{
	
	private String name;
	private String serialNo;
	private double price;
	private String descripton;
	private String specification;
	//private List<> images;
	//private List<> review;
	
	@XmlElement
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	@XmlElement
	public String getSerialNo() {
		return serialNo;
	}
	public void setSerialNo(String serialNo) {
		this.serialNo = serialNo;
	}
	
	@XmlElement
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	
	@XmlElement
	public String getDescripton() {
		return descripton;
	}
	public void setDescripton(String descripton) {
		this.descripton = descripton;
	}
	
	@XmlElement
	public String getSpecification() {
		return specification;
	}
	public void setSpecification(String specification) {
		this.specification = specification;
	}
	
/*	@XmlElement
	public List<> getImages() {
		return images;
	}
	public void setImages(List<> images) {
		this.images = images;
	}
	
	@XmlElement
	public List<> getReview() {
		return review;
	}
	public void setReview(List<> review) {
		this.review = review;
	}*/
	
	
	@Override
	
	public String toString()
	{
		return "name : " + getName() + "SerialNo : " + getSerialNo();
	}
	
	
}
