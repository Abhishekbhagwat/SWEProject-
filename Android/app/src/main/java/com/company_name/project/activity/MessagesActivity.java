/**
 *  Created by Abhishek Bhagwat.
 */

package com.company_name.project.activity;

import android.content.Intent;
import com.company_name.project.R;
import android.support.constraint.ConstraintLayout;
import android.support.v7.app.AppCompatActivity;
import android.widget.ImageView;
import android.widget.TextView;
import android.view.View;
import android.os.Bundle;
import android.content.Context;


public class MessagesActivity extends AppCompatActivity {
	
	public static Intent newIntent(Context context) {
	
		// Fill the created intent with the data you want to be passed to this Activity when it's opened.
		return new Intent(context, MessagesActivity.class);
	}
	
	private TextView titleTextView;
	private TextView titleTwoTextView;
	private TextView titleThreeTextView;
	private TextView titleFourTextView;
	private ImageView header_menu_dark_image_view;
	private ConstraintLayout can14_constraint_layout;
	@Override
	public void onCreate(Bundle savedInstanceState) {
	
		super.onCreate(savedInstanceState);
		this.setContentView(R.layout.messages_activity);
		this.init();
	}
	
	private void init() {
	
		// Configure Title component
		titleTextView = this.findViewById(R.id.title_text_view);
		
		// Configure Title component
		titleTwoTextView = this.findViewById(R.id.title_two_text_view);
		
		// Configure Title component
		titleThreeTextView = this.findViewById(R.id.title_three_text_view);
		
		// Configure Title component
		titleFourTextView = this.findViewById(R.id.title_four_text_view);

		header_menu_dark_image_view = this.findViewById(R.id.header_menu_dark_image_view);
		header_menu_dark_image_view.setOnClickListener(view -> {
			this.startActivity(NavigationMenuActivity.newIntent(this));
		});

		can14_constraint_layout = this.findViewById(R.id.can14_constraint_layout);
		can14_constraint_layout.setOnClickListener(view -> {
			this.startActivity(ChatActivity.newIntent(this));
		});
	}
}
