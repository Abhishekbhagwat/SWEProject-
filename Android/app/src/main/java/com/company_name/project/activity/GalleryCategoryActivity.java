/**
 *  Created by Abhishek Bhagwat.
 */

package com.company_name.project.activity;

import android.content.Intent;
import android.widget.LinearLayout;
import android.widget.ImageButton;
import com.company_name.project.R;
import android.support.constraint.ConstraintLayout;
import android.support.v7.app.AppCompatActivity;
import android.widget.ImageView;
import android.widget.TextView;
import android.view.View;
import android.os.Bundle;
import android.content.Context;


public class GalleryCategoryActivity extends AppCompatActivity {
	
	public static Intent newIntent(Context context) {
	
		// Fill the created intent with the data you want to be passed to this Activity when it's opened.
		return new Intent(context, GalleryCategoryActivity.class);
	}
	
	private LinearLayout southspinecategoryButton;
	private LinearLayout northspinecategoryButton;
	private ImageView cart_image_view;
	private ImageView header_menu_dark_button;
	@Override
	public void onCreate(Bundle savedInstanceState) {
	
		super.onCreate(savedInstanceState);
		this.setContentView(R.layout.gallery_category_activity);
		this.init();
	}
	
	private void init() {
	
		// Configure southSpineCategory component
		southspinecategoryButton = this.findViewById(R.id.southspinecategory_button);
		southspinecategoryButton.setOnClickListener((view) -> {
			this.onSouthSpineCategoryPressed();
		});
		
		// Configure northSpineCategory component
		northspinecategoryButton = this.findViewById(R.id.northspinecategory_button);
		northspinecategoryButton.setOnClickListener((view) -> {
			this.onNorthSpineCategoryPressed();
		});

		header_menu_dark_button = this.findViewById(R.id.header_menu_dark_button);
		header_menu_dark_button.setOnClickListener((view) -> {
			this.startActivity(NavigationMenuActivity.newIntent(this));
		});
		
		// Configure Header Menu dark component
		cart_image_view = this.findViewById(R.id.cart_image_view);
		cart_image_view.setOnClickListener((view) -> {
			this.startActivity(CartActivity.newIntent(this));
		});
	}
	
	public void onSouthSpineCategoryPressed() {
	
	}
	
	public void onNorthSpineCategoryPressed() {
	
		this.startNorthSpineTwoActivity();
	}

	
	private void startNorthSpineTwoActivity() {
	
		this.startActivity(NorthSpineTwoActivity.newIntent(this));
	}

}
