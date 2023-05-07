<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\UnicodeString;

function changeWords(string $str): string
{
  $words = explode(' ', strtolower($str));
  $capitalizedWords = array_map(function ($word) {
    return ($word);
  }, $words);
  $normalizedWords = (new UnicodeString(implode(' ', $capitalizedWords)))->normalize(UnicodeString::NFD);
  $strippedWords = preg_replace('/[\p{Mn}]/u', '', $normalizedWords);
  $finalString = str_replace(' ', '-', $strippedWords);
  return (strtolower($finalString));
}

function RemoveAccents($string) {
  $string = htmlentities($string);
  return preg_replace("/&([a-z])[a-z]+;/i", "$1", $string);
}

function getNameToCategory(int $catId): string
{
  $json_string = file_get_contents('../assets/constants/data.json');
  $data = json_decode($json_string, true);
  $id_to_find = $catId;
  $category = array_filter($data['categories'], function ($item) use ($id_to_find) {
    return $item['id'] == $id_to_find;
  });
  $name = reset($category)['name'];
  return RemoveAccents($name);
}

function getLastId(): int
{
  $json_string = file_get_contents('../assets/constants/data.json');

  $data = json_decode($json_string, true);

  $last_category = end($data['items']);
  $last_id = $last_category['id'];

  return $last_id + 1;
}

class Api extends AbstractController
{
  #[Route('/write', name: 'add_item')]
  public function write(Request $request)
  {
    $jsonPath = '../assets/constants/data.json';

    // Read the contents of the JSON file
    $jsonData = file_get_contents($jsonPath);

    // Parse the JSON data into a PHP array
    $data = json_decode($jsonData, true);

    // Add the new value to the PHP array
    $newValue = [
      'id' => getLastId(),
      'name' => $request->query->get('name'),
      'alt' => $request->query->get('name'),
      'category' => intval($request->query->get('category')),
      'emplacement' => $request->query->get('emplacement'),
      'description' => $request->query->get('description'),
      'caracteristiques' => $request->query->get('caracteristiques'),
      'img' => $request->query->get('img'),
      'href' => '/materiel/' . getNameToCategory(intval($request->query->get('category'))) . '/' . changeWords($request->query->get('name')),
      'available' => true,
    ];
    $data["items"][] = $newValue;

    // Encode the PHP array back into JSON format
    $jsonData = json_encode($data, JSON_PRETTY_PRINT);

    // Write the updated JSON data back to the file
    file_put_contents($jsonPath, $jsonData);

    return new JsonResponse($newValue);
  }

  #[Route('/edit', name: 'edit_item')]
  public function edit(Request $request)
  {
    $id = $request->query->get('id');
    $jsonPath = '../assets/constants/data.json';
    $json_string = file_get_contents($jsonPath);
    $data = json_decode($json_string, true);

    $arr_index = array();
    foreach ($data['items'] as $key => $value) {
      if ($value['id'] == $id) {
        $arr_index[] = $key;
        break;
      }
    }

    foreach ($arr_index as $i) {
      // unset($data['items'][$i]);
      $data['items'][$i]["name"] = $request->query->get('name');
      $data['items'][$i]["alt"] = $request->query->get('name');
      $data['items'][$i]["category"] = intval($request->query->get('category'));
      $data['items'][$i]["emplacement"] = $request->query->get('emplacement');
      $data['items'][$i]["description"] = $request->query->get('description');
      $data['items'][$i]["caracteristiques"] = $request->query->get('caracteristiques');
      $data['items'][$i]["img"] = $request->query->get('img');
      $data['items'][$i]["href"] = '/materiel/' . getNameToCategory(intval($request->query->get('category'))) . '/' . changeWords($request->query->get('name'));
      // return new JsonResponse($data['items'][$i]);
    }

    $data['items'] = array_values($data['items']);

    // return new JsonResponse($data);

    // $jsonData = json_encode($data, JSON_PRETTY_PRINT);

    file_put_contents($jsonPath, json_encode($data, JSON_PRETTY_PRINT));

    return new JsonResponse("done");
  }


  #[Route('/delete', name: 'remove_item')]
  public function delete(Request $request)
  {

    $id = $request->query->get('id');
    $jsonPath = '../assets/constants/data.json';
    $json_string = file_get_contents($jsonPath);
    $data = json_decode($json_string, true);

    $arr_index = array();
    foreach ($data['items'] as $key => $value) {
      if ($value['id'] == $id) {
        $arr_index[] = $key;
        break;
      }
    }

    foreach ($arr_index as $i) {
      unset($data['items'][$i]);
      // return new JsonResponse($data);
    }

    $data['items'] = array_values($data['items']);

    // return new JsonResponse($data);

    // $jsonData = json_encode($data, JSON_PRETTY_PRINT);

    file_put_contents($jsonPath, json_encode($data, JSON_PRETTY_PRINT));

    return new JsonResponse("done");
  }
}
