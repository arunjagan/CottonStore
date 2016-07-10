package com.JsonConvertor;

import org.codehaus.jettison.json.JSONObject;

import com.model.Product;

public class JsonConvertor {
	
	public static Product convertToObject(JSONObject jsonObject) throws Exception
	{
		String name = jsonObject.getString("name");
		String serialNo = jsonObject.getString("serialNo");
		double price = jsonObject.getDouble("price");
		String description = jsonObject.getString("desc");
		String specification = jsonObject.getString("spec");
		
		Product prod = new Product();
		
		prod.setName(name);
		prod.setSerialNo(serialNo);
		prod.setPrice(price);
		prod.setDescripton(description);
		prod.setSpecification(specification);
		
		return prod;
	}

}
