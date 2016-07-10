package com.Impl;

import java.util.ArrayList;
import java.util.List;

import com.JsonConvertor.JsonConvertor;
import com.model.Product;
import com.mongodb.MongoClient;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


import org.codehaus.jettison.json.JSONObject;

@Path("/product")
public class ProductImpl {
	
	static List<Product> prodList = new ArrayList<Product>();
	
	@POST
	@Path("add")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_FORM_URLENCODED)
	
	public String addToCart(JSONObject inputJsonObj) throws Exception
	{
		System.out.println("inside addtocart function");
		
		System.out.println("product name " + inputJsonObj.getString("name"));
		
		
		
		prodList.add(JsonConvertor.convertToObject(inputJsonObj));
		
		System.out.println("inside addtocart function" + prodList.size());
		
		String message = "Successfully added to cart";
		
		return message;
	}
	
	
	@POST
	@Path("view")
	@Produces(MediaType.APPLICATION_JSON)
	public Response view()
	{
		System.out.println("inside view");
		String message = "success";
		GenericEntity<String> entity = new GenericEntity<String>(message) {};
	    Response response = Response.ok(entity).build();
	    return response;
	}

}


