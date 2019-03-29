/**
 *  Created by Abhishek Bhagwat.
 */

package com.company_name.project.activity;

import android.content.Intent;
import android.widget.LinearLayout;
import com.company_name.project.R;
import android.support.constraint.ConstraintLayout;
import android.support.v7.app.AppCompatActivity;
import android.widget.ImageView;
import android.widget.TextView;
import android.view.View;
import android.os.Bundle;
import android.content.Context;


public class NorthSpineTwoActivity extends AppCompatActivity {
	
	public static Intent newIntent(Context context) {
	
		// Fill the created intent with the data you want to be passed to this Activity when it's opened.
		return new Intent(context, NorthSpineTwoActivity.class);
	}
	
	private LinearLayout ricestallButton;
	private LinearLayout vegetablestallButton;
	private ImageView header_menu_dark_button;
	private ImageView cart_image_view;
	@Override
	public void onCreate(Bundle savedInstanceState) {
	
		super.onCreate(savedInstanceState);
		this.setContentView(R.layout.north_spine_two_activity);
		this.init();
	}
	
	private void init() {
	
		// Configure riceStall component
		ricestallButton = this.findViewById(R.id.ricestall_button);
		ricestallButton.setOnClickListener((view) -> {
			this.onRiceStallPressed();
		});

		header_menu_dark_button = this.findViewById(R.id.header_menu_dark_image_view);
		header_menu_dark_button.setOnClickListener((view) -> {
			this.startActivity(NavigationMenuActivity.newIntent(this));
		});
		
		// Configure vegetableStall component
		vegetablestallButton = this.findViewById(R.id.vegetablestall_button);
		vegetablestallButton.setOnClickListener((view) -> {
			this.onVegetableStallPressed();
		});

		cart_image_view = this.findViewById(R.id.cart_image_view3);
		cart_image_view.setOnClickListener((view) -> {
			this.startActivity(CartActivity.newIntent(this));
		});
	}
	
	public void onRiceStallPressed() {
	
		this.startNorthSpineActivity();
	}
	
	public void onVegetableStallPressed() {
	
	}
	
	private void startNorthSpineActivity() {
	
		this.startActivity(NorthSpineActivity.newIntent(this));
	}
}
