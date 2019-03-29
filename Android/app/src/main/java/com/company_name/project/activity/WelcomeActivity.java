/**
 *  Created by Abhishek Bhagwat.
 */

package com.company_name.project.activity;

import android.content.Intent;
import android.widget.Button;
import com.company_name.project.R;
import android.support.constraint.ConstraintLayout;
import android.support.v7.app.AppCompatActivity;
import android.widget.ImageView;
import android.widget.TextView;
import android.view.View;
import android.os.Bundle;
import android.content.Context;


public class WelcomeActivity extends AppCompatActivity {
	
	public static Intent newIntent(Context context) {
	
		// Fill the created intent with the data you want to be passed to this Activity when it's opened.
		return new Intent(context, WelcomeActivity.class);
	}
	
	private Button getstartedButton;
	private TextView subheadingTextView;
	private TextView titleTextView;
	
	@Override
	public void onCreate(Bundle savedInstanceState) {
	
		super.onCreate(savedInstanceState);
		this.setContentView(R.layout.welcome_activity);
		this.init();
	}
	
	private void init() {
	
		// Configure getStarted component
		getstartedButton = this.findViewById(R.id.getstarted_button);
		getstartedButton.setOnClickListener((view) -> {
	this.onGetStartedPressed();
});
		
		// Configure Subheading component
		subheadingTextView = this.findViewById(R.id.subheading_text_view);
		
		// Configure Title component
		titleTextView = this.findViewById(R.id.title_text_view);
	}
	
	public void onGetStartedPressed() {
	
		this.startStartPageActivity();
	}
	
	private void startStartPageActivity() {
	
		this.startActivity(StartPageActivity.newIntent(this));
	}
}
