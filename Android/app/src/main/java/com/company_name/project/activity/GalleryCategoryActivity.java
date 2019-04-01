/**
 *  Created by Abhishek Bhagwat.
 */

package com.company_name.project.activity;

import android.content.Intent;
import android.support.v7.app.AlertDialog;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.widget.LinearLayout;
import android.widget.ImageButton;

import com.android.volley.DefaultRetryPolicy;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.company_name.project.R;

import android.support.constraint.ConstraintLayout;
import android.support.v7.app.AppCompatActivity;
import android.widget.ImageView;
import android.widget.TextView;
import android.view.View;
import android.os.Bundle;
import android.content.Context;

import com.android.volley.toolbox.Volley;
import com.company_name.project.adapter.CuisineAdapter;
import com.company_name.project.model.Cuisine;


import org.json.JSONArray;
import org.json.JSONObject;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

public class GalleryCategoryActivity extends AppCompatActivity {
	
	public static Intent newIntent(Context context) {
	
		// Fill the created intent with the data you want to be passed to this Activity when it's opened.
		return new Intent(context, GalleryCategoryActivity.class);
	}
	
	private LinearLayout southspinecategoryButton;
	private LinearLayout northspinecategoryButton;
	private ImageView cart_image_view;
	private ImageView header_menu_dark_button;

	private RecyclerView recyclerView;
	private CuisineAdapter adapter;
	RecyclerView.LayoutManager mLayoutManager;

	private ArrayList<Cuisine> cuisineList = null;
	@Override
	public void onCreate(Bundle savedInstanceState) {
	
		super.onCreate(savedInstanceState);
		this.setContentView(R.layout.gallery_category_activity);
		cuisineList = new ArrayList<>();
		this.init();
	}
	
	private void init() {
	
//		// Configure southSpineCategory component
//		southspinecategoryButton = this.findViewById(R.id.southspinecategory_button);
//		southspinecategoryButton.setOnClickListener((view) -> {
//		});
//
//		// Configure northSpineCategory component
//		northspinecategoryButton = this.findViewById(R.id.northspinecategory_button);
//		northspinecategoryButton.setOnClickListener((view) -> {
//			this.startActivity(NorthSpineTwoActivity.newIntent(this));
//		});

		header_menu_dark_button = this.findViewById(R.id.header_menu_dark_button);
		header_menu_dark_button.setOnClickListener((view) -> {
			this.startActivity(NavigationMenuActivity.newIntent(this));
		});
		
		// Configure Header Menu dark component
		cart_image_view = this.findViewById(R.id.cart_image_view);
		cart_image_view.setOnClickListener((view) -> {
			this.startActivity(CartActivity.newIntent(this));
		});

		this.getGalleryItems();

//		recyclerView.removeAllViews();
//		adapter.updateList(cuisineList);
//		recyclerView.setAdapter(adapter);
	}

	private void getGalleryItems() {
		String url = "http://10.0.2.2:3000/api/cuisines";

       /* String device_id = Settings.Secure.getString(this.getContentResolver(),
                Settings.Secure.ANDROID_ID);*/

		// Initialize a new RequestQueue instance
		RequestQueue requestQueue = Volley.newRequestQueue(getApplicationContext());
		// Initialize a new JsonObjectRequest instance
		JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(
				Request.Method.GET,
				url,
				null,
				new Response.Listener<JSONObject>() {
					@Override
					public void onResponse(JSONObject response) {
						// Do something with response
						try{
//							response.getString("");
//							Log.i("API", response.toString());
							List<String> listdata = new ArrayList<>();
							JSONArray cuisineArray = response.getJSONArray("cuisines");

							if (cuisineArray != null) {
								for (int i=0; i<cuisineArray.length(); i++){
									JSONObject json = cuisineArray.getJSONObject(i);
									Cuisine temp = new Cuisine();
									temp.name = json.getString("name");
									temp.img = json.getString("img");
									cuisineList.add(temp);
//									Log.i("Array", cuisineArray.getString(i));
//									Log.i("Cuisine", temp.name + " " + temp.img);
								}
							}

							adapter = new CuisineAdapter(cuisineList);
							recyclerView = findViewById(R.id.cuisine_recycler_view);
							mLayoutManager = new LinearLayoutManager(getApplicationContext());
							recyclerView.setAdapter(adapter);
							recyclerView.setLayoutManager(mLayoutManager);
//							Intent intent = new Intent(LogInActivity.this, MainActivity.class);
//							startActivity(intent);
						}
						catch (Exception error){
							String message = error.getMessage() + "\n" + error.fillInStackTrace().toString();
							new AlertDialog.Builder(GalleryCategoryActivity.this)
									.setTitle("Burp")
									.setMessage(message).show();
						}
					}
				},
				new Response.ErrorListener(){
					@Override
					public void onErrorResponse(VolleyError error){
						if(error.networkResponse == null) {
							new AlertDialog.Builder(GalleryCategoryActivity.this)
									.setTitle("Burp")
									.setMessage("Could not connect to network").show();
							Log.i("onErrorResponse", error.getMessage());
						} else {
							// Do something when error occurred
							String resBody = null;
							//get status code here
							String statusCode = String.valueOf(error.networkResponse.statusCode);
							//get response body and parse with appropriate encoding
							if (error.networkResponse.data != null) {
								try {
									resBody = new String(error.networkResponse.data, "UTF-8");
									if (resBody.contains("Unauthorized"))
										resBody = "Please enter valid credentials.";
								} catch (UnsupportedEncodingException e) {
									e.printStackTrace();
								}
							}

							//String message = error.getMessage() + "\n" + resBody +"\n"+ error.fillInStackTrace().toString();
							new AlertDialog.Builder(GalleryCategoryActivity.this)
									.setTitle("Burp")
									.setMessage(resBody).show();
						}
					}
				}
		);
		jsonObjectRequest.setRetryPolicy(new DefaultRetryPolicy(
				10000,
				DefaultRetryPolicy.DEFAULT_MAX_RETRIES,
				DefaultRetryPolicy.DEFAULT_BACKOFF_MULT));
		// Add JsonObjectRequest to the RequestQueue
		requestQueue.add(jsonObjectRequest);

	}
}
