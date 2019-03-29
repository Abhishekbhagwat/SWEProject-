/**
 *  Created by Abhishek Bhagwat.
 */

package com.company_name.project.activity;

import android.content.Intent;
import android.widget.ImageButton;
import com.company_name.project.R;
import android.support.constraint.ConstraintLayout;
import android.support.v7.app.AppCompatActivity;
import android.widget.ImageView;
import android.widget.TextView;
import android.view.View;
import android.os.Bundle;
import android.content.Context;


public class EditUserProfileActivity extends AppCompatActivity {
	
	public static Intent newIntent(Context context) {
	
		// Fill the created intent with the data you want to be passed to this Activity when it's opened.
		return new Intent(context, EditUserProfileActivity.class);
	}
	
	private TextView updateProfileTextView;
	private TextView mobileNumberTextView;
	private TextView emailAddressTextView;
	private TextView dateOfBirthTextView;
	private TextView fullNameTextView;
	private ImageButton headerMenuDarkButton;
	
	@Override
	public void onCreate(Bundle savedInstanceState) {
	
		super.onCreate(savedInstanceState);
		this.setContentView(R.layout.edit_user_profile_activity);
		this.init();
	}
	
	private void init() {
	
		// Configure Update Profile component
		updateProfileTextView = this.findViewById(R.id.update_profile_text_view);
		
		// Configure Mobile Number component
		mobileNumberTextView = this.findViewById(R.id.mobile_number_text_view);
		
		// Configure Email Address component
		emailAddressTextView = this.findViewById(R.id.email_address_text_view);
		
		// Configure Date of Birth component
		dateOfBirthTextView = this.findViewById(R.id.date_of_birth_text_view);
		
		// Configure Full Name component
		fullNameTextView = this.findViewById(R.id.full_name_text_view);
		
		// Configure Header Menu dark component
		headerMenuDarkButton = this.findViewById(R.id.header_menu_dark_button);
		headerMenuDarkButton.setOnClickListener((view) -> {
	this.onHeaderMenuDarkPressed();
});
	}
	
	public void onHeaderMenuDarkPressed() {
	
		this.startNavigationMenuActivity();
	}
	
	private void startNavigationMenuActivity() {
	
		this.startActivity(NavigationMenuActivity.newIntent(this));
	}
}
