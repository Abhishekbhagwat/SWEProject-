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


public class OrderHistoryActivity extends AppCompatActivity {
	
	public static Intent newIntent(Context context) {
	
		// Fill the created intent with the data you want to be passed to this Activity when it's opened.
		return new Intent(context, OrderHistoryActivity.class);
	}
	
	private TextView titleTextView;
	private TextView titleTwoTextView;
	
	@Override
	public void onCreate(Bundle savedInstanceState) {
	
		super.onCreate(savedInstanceState);
		this.setContentView(R.layout.order_history_activity);
		this.init();
	}
	
	private void init() {
	
		// Configure Title component
		titleTextView = this.findViewById(R.id.title_text_view);
		
		// Configure Title component
		titleTwoTextView = this.findViewById(R.id.title_two_text_view);
	}
}
