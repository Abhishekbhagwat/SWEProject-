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


public class SignInActivity extends AppCompatActivity {
	
	public static Intent newIntent(Context context) {
	
		// Fill the created intent with the data you want to be passed to this Activity when it's opened.
		return new Intent(context, SignInActivity.class);
	}
	
	private TextView forgotPasswordTextView;
	private TextView dontHaveAccountTextView;
	private Button signinbuttonButton;
	private TextView passwordTextView;
	private TextView usernameTextView;
	private TextView titleTextView;
	private ImageView google_sign_in_image_view;

	@Override
	public void onCreate(Bundle savedInstanceState) {
	
		super.onCreate(savedInstanceState);
		this.setContentView(R.layout.sign_in_activity);
		this.init();
	}
	
	private void init() {
	
		// Configure Forgot Password? component
		forgotPasswordTextView = this.findViewById(R.id.forgot_password_text_view);
		dontHaveAccountTextView = this.findViewById(R.id.dont_have_account_text_view);
		dontHaveAccountTextView.setOnClickListener((view -> {
			this.startActivity(SignUpActivity.newIntent(this));
		}));
		// Configure signInButton component
		signinbuttonButton = this.findViewById(R.id.signinbutton_button);
		signinbuttonButton.setOnClickListener((view) -> {
			this.startActivity(GalleryCategoryActivity.newIntent(this));
		});
		google_sign_in_image_view = this.findViewById(R.id.google_sign_in_image_view);
		google_sign_in_image_view.setOnClickListener((view) -> {
			this.startActivity(GalleryCategoryActivity.newIntent(this));
		});

		// Configure Password component
		passwordTextView = this.findViewById(R.id.password_text_view);
		
		// Configure Username component
		usernameTextView = this.findViewById(R.id.username_text_view);
		
		// Configure title component
		titleTextView = this.findViewById(R.id.title_text_view);
	}

	public void validateUser(String username, String password) {
		String getCustomers = "http://10.0.2.2:3000/api/login";
		JSONObject jsonObject = new JSONObject();
		try {
			jsonObject.put("username", usernameTextView.getText().toString());
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
							new AlertDialog.Builder(SignInActivity.this)
									.setTitle("Burp")
									.setMessage(message).show();
						}
					}
				},
				new Response.ErrorListener(){
					@Override
					public void onErrorResponse(VolleyError error){
						if(error.networkResponse == null) {
							new AlertDialog.Builder(SignInActivity.this)
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
							new AlertDialog.Builder(SignInActivity.this)
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
