/**
 *  Created by Abhishek Bhagwat.
 */

package com.company_name.project.activity;

import android.content.Intent;
import android.support.v7.app.AlertDialog;
import android.util.Log;
import android.widget.Button;

import com.android.volley.DefaultRetryPolicy;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import com.company_name.project.R;
import android.support.constraint.ConstraintLayout;
import android.support.v7.app.AppCompatActivity;
import android.widget.ImageView;
import android.widget.TextView;
import android.view.View;
import android.os.Bundle;
import android.content.Context;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.UnsupportedEncodingException;


public class SignUpActivity extends AppCompatActivity {
	
	public static Intent newIntent(Context context) {
	
		// Fill the created intent with the data you want to be passed to this Activity when it's opened.
		return new Intent(context, SignUpActivity.class);
	}
	
	private Button signInInsteadButton;
	private Button signupbuttonButton;
	private TextView passwordTextView;
	private TextView emailAddressTextView;
	private TextView fullNameTextView;
	private TextView titleTextView;
	
	@Override
	public void onCreate(Bundle savedInstanceState) {
	
		super.onCreate(savedInstanceState);
		this.setContentView(R.layout.sign_up_activity);
		this.init();
	}
	
	private void init() {
	
		// Configure Sign In Instead component
		signInInsteadButton = this.findViewById(R.id.sign_in_instead_button);
		signInInsteadButton.setOnClickListener((view) -> {
	this.onSignInInsteadPressed();
});
		
		// Configure signUpButton component
		signupbuttonButton = this.findViewById(R.id.signupbutton_button);
		signupbuttonButton.setOnClickListener((view) -> {
	this.onSignUpButtonPressed();
});
		
		// Configure Mobile Number component
		passwordTextView = this.findViewById(R.id.password_text_view);

		// Configure Email Address component
		emailAddressTextView = this.findViewById(R.id.email_address_text_view);
		
		// Configure Full Name component
		fullNameTextView = this.findViewById(R.id.full_name_text_view);
		
		// Configure title component
		titleTextView = this.findViewById(R.id.title_text_view);
	}
	
	public void onSignInInsteadPressed() {
		this.startSignInActivity();
	}
	
	public void onSignUpButtonPressed() {
		boolean valid = true;
		if(emailAddressTextView.getText().toString().isEmpty()) {
			emailAddressTextView.setError("Email mandatory");
			valid = false;
		}
		if(passwordTextView.getText().toString().isEmpty()) {
			passwordTextView.setError("Password mandatory");
			valid = false;
		}
		if(fullNameTextView.getText().toString().isEmpty()) {
			fullNameTextView.setError("Name mandatory");
			valid = false;
		}
		if(valid) {
			validateUser();
			this.startGalleryCategoryActivity();
		}
	}
	
	private void startSignInActivity() {
	
		this.startActivity(SignInActivity.newIntent(this));
	}
	
	private void startGalleryCategoryActivity() {
	
		this.startActivity(GalleryCategoryActivity.newIntent(this));
	}

	public void validateUser() {
		String getCustomers = "http://10.0.2.2:3000/api/login";
		JSONObject jsonObject = new JSONObject();
		try {
			jsonObject.put("name", fullNameTextView.getText().toString());
			jsonObject.put("email", emailAddressTextView.getText().toString());
			jsonObject.put("password", passwordTextView.getText().toString());
		} catch (JSONException e) {
			e.printStackTrace();
		}
       /* String device_id = Settings.Secure.getString(this.getContentResolver(),
                Settings.Secure.ANDROID_ID);*/

		// Initialize a new RequestQueue instance
		RequestQueue requestQueue = Volley.newRequestQueue(getApplicationContext());
		// Initialize a new JsonObjectRequest instance
		JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(
				Request.Method.POST,
				getCustomers,
				jsonObject,
				new Response.Listener<JSONObject>() {
					@Override
					public void onResponse(JSONObject response) {
						// Do something with response
						try{
//							response.getString("");
							Log.i("API", response.toString());
//							Intent intent = new Intent(LogInActivity.this, MainActivity.class);
//							startActivity(intent);
						}
						catch (Exception error){
							String message = error.getMessage() + "\n" + error.fillInStackTrace().toString();
							new AlertDialog.Builder(SignUpActivity.this)
									.setTitle("Burp")
									.setMessage(message).show();
						}
					}
				},
				new Response.ErrorListener(){
					@Override
					public void onErrorResponse(VolleyError error){
						if(error.networkResponse == null) {
							new AlertDialog.Builder(SignUpActivity.this)
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
							new AlertDialog.Builder(SignUpActivity.this)
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
